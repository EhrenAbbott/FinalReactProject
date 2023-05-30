import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from '../api/server'
import { useDispatch, useStore } from 'react-redux';
import { chooseWord, chooseMeaning, chooseGender, choosePartOfSpeech, choosePlural, choosePresentTense, choosePastTense, choosePastPart, choosePerfectAux, choosePreposition, chooseCaseTriggered } from "../redux/slices/RootSlice";



interface WordFormProps {
  id?: string[]
}

const WordForm = (props:WordFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.name } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 500);
      event.target.reset()
    } else {
      dispatch(chooseWord(data.word));
      dispatch(chooseMeaning(data.meaning));
      dispatch(choosePartOfSpeech(data.part_of_speech));
      dispatch(chooseGender(data.gender));
      dispatch(choosePlural(data.plural));
      dispatch(choosePresentTense(data.present_tense));
      dispatch(choosePastTense(data.past_tense));
      dispatch(choosePastPart(data.past_part));
      dispatch(choosePerfectAux(data.perfect_aux));
      dispatch(choosePreposition(data.preposition));
      dispatch(chooseCaseTriggered(data.case_triggered));

      server_calls.create(store.getState())
      setTimeout( () => {window.location.reload()}, 500);
    }
    
  }

  return (


    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="word">Word</label>
          <Input {...register('word')} name='word' placeholder="Word"/>
        </div>
        <div>
          <label htmlFor="meaning">Meaning</label>
          <Input {...register('meaning')} name='meaning' placeholder="Meaning"/>
        </div>
        <div>
          <label htmlFor="part_of_speech">Part of Speech</label>
          <Input {...register('part_of_speech')} name='part_of_speech' placeholder="Part of Speech"/>
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <Input {...register('gender')} name='gender' placeholder="Gender"/>
        </div>
        <div>
          <label htmlFor="plural">Plural</label>
          <Input {...register('plural')} name='plural' placeholder="Plural"/>
        </div>
        <div>
          <label htmlFor="present_tense">Present Tense</label>
          <Input {...register('present_tense')} name='present_tense' placeholder="Present Tense"/>
        </div>
        <div>
          <label htmlFor="past_tense">Past Tense</label>
          <Input {...register('past_tense')} name='past_tense' placeholder="Past Tense"/>
        </div>
        <div>
          <label htmlFor="past_part">Past Participle</label>
          <Input {...register('past_part')} name='past_part' placeholder="Past Participle"/>
        </div>
        <div>
          <label htmlFor="perfect_aux">Perfect Aux</label>
          <Input {...register('perfect_aux')} name='perfect_aux' placeholder="Perfect Aux"/>
        </div>
        <div>
          <label htmlFor="preposition">Preposition</label>
          <Input {...register('preposition')} name='preposition' placeholder="Preposition"/>
        </div>
        <div>
          <label htmlFor="case_triggered">Case Triggered</label>
          <Input {...register('case_triggered')} name='case_triggered' placeholder="Case Triggered"/>
        </div>
        <div className="flex p-1">
          <Button
            className="flex justify-start m-3 bg-black p-2 rounded hover:bg-slate-800 text-orange-500"
            >
              Submit
          </Button>
        </div>
        <div>
          <label></label>
          <Input {...register('blank')} name='blank' placeholder="Blank"/>
        </div>
      </form>
    </div>
  )
}

export default WordForm
