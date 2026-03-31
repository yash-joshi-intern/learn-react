import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const LIMIT = 10

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async ( _ , {getState}) => {
        const {page, search , sort, category} = getState().products;

        const skip = (page -1) * LIMIT

        const sortParam = sort ? `&sortBy=price&order=${sort}`:"";

        let url;

        if (search && category !== "all") {
            url = `https://dummyjson.com/products/category/${category}?limit=0${sortParam}`;
        } else if (search) {
            url = `https://dummyjson.com/products/search?q=${search}&limit=${LIMIT}&skip=${skip}${sortParam}`;
        } else if (category !== "all") {
            url = `https://dummyjson.com/products/category/${category}?limit=${LIMIT}&skip=${skip}${sortParam}`;
        } else {
            url = `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}${sortParam}`;
        }
        
        const res = await fetch(url);
        const data = await res.json();

        let result = data.products;

        if (search && category !== "all") {
            result = result.filter(p =>
            p.title.toLowerCase().includes(search.toLowerCase())
        );

        return {
            products: result.slice(skip, skip + LIMIT),
            total: result.length,
        };
        }

        return {
            products: result,
            total: data.total,
        };
    }
);


const productsSlice = createSlice({
    name : "products",
    initialState : {
        products: [],
        page: 1,
        total: 0,
        search: "",
        sort: "",
        category: "all",
        categories: [],
    },
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload;
        },
        setSearch: (state, action) => {
            state.search = action.payload;
            state.page = 1;
        },
        setSort: (state, action) => {
            state.sort = action.payload;
            state.page = 1;
        },
        setCategory: (state, action) => {
            state.category = action.payload;
            state.page = 1;
        },
        setCategories: (state, action) => {
            state.categories = action.payload;
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload.products;
            state.total = action.payload.total;
        });
    },
})

export const {
  setPage,
  setSearch,
  setSort,
  setCategory,
  setCategories,
} = productsSlice.actions;

export default productsSlice.reducer;