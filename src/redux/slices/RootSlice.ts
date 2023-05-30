import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: "root",
    initialState: {
        word: "Word",
        meaning: 'Meaning',
        part_of_speech: "Part of Speech",
        gender: "Gender",
        plural: "Plural", 
        present_tense: "Present Tense",
        past_tense: "Past Tense",
        past_part: "Past Part", 
        perfect_aux: "Perfect Aux",
        preposition: "Preposition", 
        case_triggered: "Case Triggered"
    },
    reducers: {
        chooseWord: (state, action) => { state.word = action.payload },
        chooseMeaning: (state, action) => { state.meaning = action.payload },
        choosePartOfSpeech: (state, action) => { state.part_of_speech = action.payload },
        chooseGender: (state, action) => { state.gender = action.payload },
        choosePlural: (state, action) => { state.plural = action.payload },
        choosePresentTense: (state, action) => { state.present_tense = action.payload },
        choosePastTense: (state, action) => { state.past_tense = action.payload },
        choosePastPart: (state, action) => { state.past_part = action.payload },
        choosePerfectAux: (state, action) => { state.perfect_aux = action.payload },
        choosePreposition: (state, action) => { state.preposition = action.payload },
        chooseCaseTriggered: (state, action) => { state.case_triggered = action.payload },
    }
})

export const reducer = rootSlice.reducer;
export const { chooseWord, chooseMeaning, choosePartOfSpeech, chooseGender, choosePlural, choosePresentTense, choosePastTense, choosePastPart, choosePerfectAux, choosePreposition, chooseCaseTriggered } = rootSlice.actions