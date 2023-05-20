import { useSelector } from 'react-redux';
import en from '../../en';
import fr from '../../fr';

const GetLangText = (text) => {
  const lang = useSelector((state) => state.language);
  const languageFile = lang.value === 'fr' ? fr : en;
  
  return languageFile[text];
};

export default GetLangText;