import { configureStore } from '@reduxjs/toolkit';
import siteSlice from '@/slices/siteSlice'

export default configureStore({
  reducer: {
    site: siteSlice
  },
})