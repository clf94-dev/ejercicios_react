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
    historyTestData: undefined,
    historyCasesData: undefined,
    historyDeathData: undefined,
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

        let testsData = []
        let casesData = []
        let deathData = []

        historyData.data.forEach((date) => {
            const testItem = {
                date: date.date,
                total: date.testing.total.value,
                population_percent: date.testing.total.calculated.population_percent, 
                change_from_prior_day: date.testing.total.calculated.change_from_prior_day,
                seven_day_change_percent: date.testing.total.calculated.seven_day_change_percent,
            }
            const caseItem = {
                date: date.date,
                total: date.cases.total.value,
                population_percent: date.cases.total.calculated.population_percent, 
                change_from_prior_day: date.cases.total.calculated.change_from_prior_day,
                seven_day_change_percent: date.cases.total.calculated.seven_day_change_percent,
            }
            const deathItem = {
                date: date.date,
                total: date.outcomes.death.total.value,
                population_percent: date.outcomes.death.total.calculated.population_percent, 
                change_from_prior_day: date.outcomes.death.total.calculated.change_from_prior_day,
                seven_day_change_percent: date.outcomes.death.total.calculated.seven_day_change_percent,
            }
            testsData.push(testItem)

            casesData.push(caseItem)
            deathData.push(deathItem)
        })

        
    
    
        set({
            historyData,
            historyTestData: testsData,
            historyCasesData: casesData,
            historyDeathData: deathData,
        });
      },
}));

