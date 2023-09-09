import create from 'zustand';
import { requestGenderizedData,requestAgifyData, requestNationalizedData  } from '../services/firstExercise';
import { requestHistoryData } from '../services/secondExercise';

export const useStore = create((set) => ({
    nameValue: '',
    genderizeData: undefined,
    setGenderizeData: (data) => set({ genderizeData: data }),
    nationalizeData: undefined,
    setNationalizeData: (data) => set({ nationalizeData: data }),
    agifyData: undefined,
    setAgifyData: (data) => set({ agifyData: data }),

    historyData: undefined,
    requestDataExercise1: async (pathParams) => {
        const [
            genderizeData,
            nationalizeData,
            agifyData,
          
        ] = await Promise.all([
          requestGenderizedData(pathParams),
          requestNationalizedData(pathParams),
          requestAgifyData(pathParams),
          
        ]);
        
    
    
        set({
            genderizeData,
            nationalizeData,
            agifyData,
            nameValue: pathParams.name,
        });
      },
      requestHistoryExercise2: async () => {
        const [
            historyData
          
        ] = await Promise.all([
          requestHistoryData(),
         
          
        ]);
        
    
    
        set({
            historyData,
        });
      },
}));

