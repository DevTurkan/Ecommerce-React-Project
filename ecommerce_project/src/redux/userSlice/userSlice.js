import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";

const userAdapter = createEntityAdapter({
  selectId: (user) => user.id,
  // sortComparer: (a, b) => a.username.localeCompare(b.username),
});

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  try {
    const response = await fetch("http://localhost:3000/users");
    return await response.json();
  } catch (error) {
    throw new error(error);
  }
});

export const addUser = createAsyncThunk("user/addUser", async (user) => {
  try {
    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (error) {
    throw new error(error);
  }
});

export const postSelectedUser = createAsyncThunk("user/postSelectedUser", async (user) => {
  try {
    const response = await fetch("http://localhost:3000/selectedUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (error) {
    throw new error(error);
  }
});

export const updateUser = createAsyncThunk("user/updateUser", async ({ id, user }) => {
  try {
    const response = await fetch(`http://localhost:3000/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (error) {
    throw new error(error);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: userAdapter.getInitialState({
    status: "idle",
    error: null,
    selectedUser: {},
    eyeCard:{}
  }),
  reducers: {
    addSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    updateEyeCard: (state, action) => {
      const { id, name, firstImg, price, category } = action.payload;
      if (state.eyeCard.find((item) => item.id !== id)) {
        state.eyeCard.push({
          id,
          name,
          firstImg,
          price,
          category,
          quantity: 1,
        });
      } else if (state.eyeCard.find((item) => item.id === id)) {
        state.selectedUser.card = state.selectedUser.card.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
    },
    updateSelectedUserWishlist: (state, action) => {
      const { id, name, firstImg, price, category, stock } = action.payload;
      const findedProduct = state.selectedUser.wishlist.find((item) => item.id === id);
      if (!findedProduct) {
        state.selectedUser.wishlist.push({
          id,
          name,
          firstImg,
          price,
          category,
          stock,
        });
      }
    },
    deleteSelectedUserWishlist: (state, action) => {
      const { id, name, firstImg, price, category, stock } = action.payload;
      const findedProduct = state.selectedUser.wishlist.find((item) => item.id === id);
      if (findedProduct) {
        state.selectedUser.wishlist.splice(state.selectedUser.wishlist.indexOf(findedProduct), 1);
      }
    },
    deleteSelectedUserCard: (state, action) => {
      const { id, name, firstImg, price, category, stock, quantity } = action.payload;
      const findedProduct = state.selectedUser.card.find((item) => item.id === id);
      if (findedProduct) {
        state.selectedUser.card.splice(state.selectedUser.card.indexOf(findedProduct), 1);
      }
    },
    updateSelectedUserCard: (state, action) => {
      const { id, name, firstImg, price, category } = action.payload;
      const findedProduct = state.selectedUser.card.find((item) => item.id === id);
      if (!findedProduct) {
        state.selectedUser.card.push({
          id,
          name,
          firstImg,
          price,
          category,
          quantity: 1,
        });
      } else if (findedProduct) {
        state.selectedUser.card = state.selectedUser.card.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
    },
    updateSelectedUserCardMinus: (state, action) => {
      const { id, name, firstImg, price, category } = action.payload;

      state.selectedUser.card = state.selectedUser.card.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
    },
  },
  extraReducers: {
    [fetchUsers.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.status = "succeeded";
      userAdapter.setAll(state, action.payload);
    },
    [fetchUsers.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [addUser.pending]: (state, action) => {
      state.status = "loading";
    },
    [addUser.fulfilled]: (state, action) => {
      state.status = "succeeded";
      userAdapter.addOne(state, action.payload);
    },
    [addUser.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [updateUser.pending]: (state, action) => {
      state.status = "loading";
    },
    [updateUser.fulfilled]: (state, action) => {
      state.status = "succeeded";
      userAdapter.updateOne(state, action.payload);
    },
    [updateUser.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [postSelectedUser.pending]: (state, action) => {
      state.status = "loading";
    },
    [postSelectedUser.fulfilled]: (state, action) => {
      state.status = "succeeded";
      userAdapter.addOne(state, action.payload);
    },
    [postSelectedUser.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const {
  selectIds: selectUserIds,
  selectEntities: selectUserEntities,
  selectAll: selectAllUsers,
  selectTotal: selectTotalUsers,
  selectById: selectUserById,
} = userAdapter.getSelectors((state) => state.user);

export const {
  addSelectedUser,
  updateEyeCard,
  updateSelectedUserWishlist,
  deleteSelectedUserWishlist,
  updateSelectedUserCard,
  updateSelectedUserCardMinus,
  deleteSelectedUserCard,
} = userSlice.actions;

export default userSlice.reducer;
