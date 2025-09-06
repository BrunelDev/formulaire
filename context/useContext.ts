import { create } from 'zustand'
import { createJSONStorage, persist } from "zustand/middleware";

interface FormData {
  // Step 1
  address: string;
  isStepOneChecked: boolean;
  
  // Step 2
  isStepTwoChecked: boolean;
  option: string;
  
  // Step 3
  isStepThreeChecked: boolean;
  isArchitectNeeded?: boolean;
  hasMultipleRealizationsOnSameConstructionPermit?: boolean;
  realizationsOnSameConstructionPermitNumber?: number;
  pluVerification?: boolean;
  rdcPlanVerification?: boolean;
  rdcPlanNumber?: number;
  bbioStudy?: boolean;
  seismicStudy?: boolean;
  expressDelivery?: boolean;
  displayPanel?: boolean;
  hasMultipleRealizationsOnSameDeclaration?: boolean;
  realizationsOnSameDeclarationNumber?: number;
  hasMultipleRealizationsOnSameUrbanismCertificate?: boolean;
  realizationsOnSameUrbanismCertificateNumber?: number;
  hasMultipleRealizationsOnSamePlanRequest?: boolean;
  realizationsOnSamePlanRequestNumber?: number;
  neededPlans?: string[];
  shouldMakeRDCPlan?: boolean;
  rdcPlanCount?: number;
  shouldMake3dRender?: boolean;
  renderCount3d?: number;
  
  // Step 4
  isStepFourChecked?: boolean;
  
  // Client Information
  clientFirstName: string;
  clientLastName: string;
  clientPhone: string;
  clientEmail: string;
  
  //  Step 5 
  isStepFiveChecked: boolean;

  // Final step
  isStepSixChecked: boolean;
}

interface FormState {
  formData: FormData;
  
  // Actions to update form data
  updateFormData: (data: Partial<FormData>) => void;
  updateStepOne: (data: Pick<FormData, 'address' | 'isStepOneChecked'>) => void;
  updateStepTwo: (data: Pick<FormData, 'isStepTwoChecked' | 'option'>) => void;
  updateStepThree: (data: Partial<Pick<FormData, 
    'isStepThreeChecked' | 'isArchitectNeeded' | 'hasMultipleRealizationsOnSameConstructionPermit' | 
    'realizationsOnSameConstructionPermitNumber' | 'pluVerification' | 'rdcPlanVerification' | 
    'rdcPlanNumber' | 'bbioStudy' | 'seismicStudy' | 'expressDelivery' | 'displayPanel' | 
    'hasMultipleRealizationsOnSameDeclaration' | 'realizationsOnSameDeclarationNumber' | 
    'hasMultipleRealizationsOnSameUrbanismCertificate' | 'realizationsOnSameUrbanismCertificateNumber' | 
    'hasMultipleRealizationsOnSamePlanRequest' | 'realizationsOnSamePlanRequestNumber' | 
    'neededPlans' | 'shouldMakeRDCPlan' | 'rdcPlanCount' | 'shouldMake3dRender' | 'renderCount3d'
  >>) => void;
  updateStepFour: (data: Pick<FormData, 'isStepFourChecked'>) => void;
  updateClientInfo: (data: Pick<FormData, 'clientFirstName' | 'clientLastName' | 'clientPhone' | 'clientEmail'>) => void;
  updateStepFive: (data: Pick<FormData, 'isStepFiveChecked'>) => void;
  updateFinalStep: (data: Pick<FormData, 'isStepSixChecked'>) => void;
  
  // Utility actions
  resetForm: () => void;
  isStepValid: (step: number) => boolean;
}

const initialFormData: FormData = {
  // Step 1
  address: '',
  isStepOneChecked: false,
  
  // Step 2
  isStepTwoChecked: false,
  option: '',
  
  // Step 3
  isStepThreeChecked: false,
  isArchitectNeeded: undefined,
  hasMultipleRealizationsOnSameConstructionPermit: undefined,
  realizationsOnSameConstructionPermitNumber: undefined,
  pluVerification: undefined,
  rdcPlanVerification: undefined,
  rdcPlanNumber: undefined,
  bbioStudy: undefined,
  seismicStudy: undefined,
  expressDelivery: undefined,
  displayPanel: undefined,
  hasMultipleRealizationsOnSameDeclaration: undefined,
  realizationsOnSameDeclarationNumber: undefined,
  hasMultipleRealizationsOnSameUrbanismCertificate: undefined,
  realizationsOnSameUrbanismCertificateNumber: undefined,
  hasMultipleRealizationsOnSamePlanRequest: undefined,
  realizationsOnSamePlanRequestNumber: undefined,
  neededPlans: undefined,
  shouldMakeRDCPlan: undefined,
  rdcPlanCount: undefined,
  shouldMake3dRender: undefined,
  renderCount3d: undefined,
  
  // Step 4
  isStepFourChecked: undefined,
  
  // Client Information
  clientFirstName: '',
  clientLastName: '',
  clientPhone: '',
  clientEmail: '',
  
  // Step 5
  isStepFiveChecked: false,
  // Final step
  isStepSixChecked: false,
};

export const useFormState = create<FormState>()(
  persist(
    (set, get) => ({
      formData: initialFormData,
      
      updateFormData: (data) => 
        set((state) => ({
          formData: { ...state.formData, ...data }
        })),
      
      updateStepOne: (data) =>
        set((state) => ({
          formData: { ...state.formData, ...data }
        })),
      
      updateStepTwo: (data) =>
        set((state) => ({
          formData: { ...state.formData, ...data }
        })),
      
      updateStepThree: (data) =>
        set((state) => ({
          formData: { ...state.formData, ...data }
        })),
      
      updateStepFour: (data) =>
        set((state) => ({
          formData: { ...state.formData, ...data }
        })),
      
      updateClientInfo: (data) =>
        set((state) => ({
          formData: { ...state.formData, ...data }
        })),
      
       updateStepFive: (data) =>
        set((state) => ({
          formData: { ...state.formData, ...data }
        })),
      updateFinalStep: (data) =>
        set((state) => ({
          formData: { ...state.formData, ...data }
        })),
      
      resetForm: () =>
        set(() => ({
          formData: initialFormData
        })),
      
      isStepValid: (step: number) => {
        const { formData } = get();
        
        switch (step) {
          case 1:
            return formData.address.trim() !== '' && formData.isStepOneChecked;
          case 2:
            return formData.option.trim() !== '' && formData.isStepTwoChecked;
          case 3:
            return formData.isStepThreeChecked;
          case 4:
            return formData.clientFirstName.trim() !== '' && 
                   formData.clientLastName.trim() !== '' && 
                   formData.clientPhone.trim() !== '' && 
                   formData.clientEmail.trim() !== '';
          case 5:
            return formData.isStepFiveChecked;
          case 6:
            return formData.isStepSixChecked;
          default:
            return false;
        }
      }
    }),
    {
      name: 'multipart-form-storage',
      storage: createJSONStorage(() => localStorage),
      // Optional: only persist certain fields
      partialize: (state) => ({ formData: state.formData }),
    }
  )
);