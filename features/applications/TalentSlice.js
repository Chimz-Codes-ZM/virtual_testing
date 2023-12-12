import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    overview: true,
    approvedView: false,
    deniedView: false,
    approvedApplicants: {},
    deniedApplicants: {}
}

const TalentSlice = createSlice({
    name: "talent_applications",
    initialState,
    reducers: {
        setOverview: (state) => {
            state.overview = true;
            state.approvedView = false;
            state.deniedView = false;
        },
        setApproved: (state) => {
            state.overview = false;
            state.approvedView = true;
            state.deniedView = false;
          },
          setDenied: (state) => {
            state.overview = false;
            state.approvedView = false;
            state.deniedView = true;
          },
          toggleApproved: (state, action) => {
            const { applicantId } = action.payload;
      
            // If the user is already in deniedApplicants, remove them from there
            if (state.deniedApplicants[applicantId]) {
              delete state.deniedApplicants[applicantId];
            }
      
            // Toggle the user's status in approvedApplicants
            state.approvedApplicants[applicantId] = !state.approvedApplicants[applicantId];
      
            // If the user is unchecked, remove them from approvedApplicants
            if (!state.approvedApplicants[applicantId]) {
              delete state.approvedApplicants[applicantId];
            }
          },
      
          toggleDenied: (state, action) => {
            const { applicantId } = action.payload;
      
            // If the user is already in approvedApplicants, remove them from there
            if (state.approvedApplicants[applicantId]) {
              delete state.approvedApplicants[applicantId];
            }
      
            // Toggle the user's status in deniedApplicants
            state.deniedApplicants[applicantId] = !state.deniedApplicants[applicantId];
      
            // If the user is unchecked, remove them from deniedApplicants
            if (!state.deniedApplicants[applicantId]) {
              delete state.deniedApplicants[applicantId];
            }
          },
          resetState: () => initialState
    }
})

export const {
    setOverview,
    setApproved,
    setDenied,
    toggleApproved,
    toggleDenied,
    resetState
} = TalentSlice.actions

export default TalentSlice.reducer