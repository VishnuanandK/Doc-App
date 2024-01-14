import React ,{useEffect,useState,useRef} from 'react'
import { useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {updateDoc,collection,doc,onSnapshot} from 'firebase/firestore';

export default function EditDocs({database}) {
    let params = useParams();
    const isMounted = useRef()
    const [documentTitle, setDocumentTitle] = useState('')
    const collectionRef = collection(database, 'docsData')
    const [docsDesc, setDocsDesc] = useState('');
    const getQuillData = (value) => {
        setDocsDesc(value)
    }
    const getData = () => {
        const document = doc(collectionRef, params.id)
        onSnapshot(document, (docs) => {
            setDocumentTitle(docs.data().title)
            setDocsDesc(docs.data().docsDesc);
        })
    }

    
    useEffect(() => {
        const updateDocsData =setTimeout(() => {
            const document = doc(collectionRef, params.id)
            updateDoc(document, {
                docsDesc: docsDesc
            })
            .then(() => {
                alert('Saved')
            })
            .catch(() => {
                alert('Cannot Save')
            })
        },1500)
        return()=>clearTimeout(updateDocsData)
 }, [docsDesc]) 
 
 useEffect(() => {
    if(isMounted.current){
        return 
    }

    isMounted.current = true;
    getData()
}, [])
  return (
    <div>
    <h1>{documentTitle}</h1>
    <div className=''>
        <ReactQuill
        value={docsDesc}
        onChange={getQuillData}
        />
    </div>
   </div>
 )
}