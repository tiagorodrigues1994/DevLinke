import { FormEvent, useState } from "react"
import { Header } from "../../components/Header"
import { Input } from "../../components/input"

import { db } from "../../services/firebaseconnection"
import {
    setDoc,
    getDoc,
    doc
} from 'firebase/firestore'

export function Networks() {

    const [instagram, setInstagram] = useState("")
    const [Linkedin, setLinkedin] = useState("")
    
    function handleRegister(e: FormEvent){
        e.preventDefault();
        setDoc(doc(db, 'social', 'link'),{
            instagram:instagram,
            Linkedin:Linkedin
            })
            .then(()=>{
                console.log('cadastrado')
            })
            .catch((error)=>{
                console.log("deu ruim" +error)
            })
    }
return(
        <div className="flex items-center flex-col min-h=screen pb-7 px-2">
            <Header />
            <h1 className="text-white tex-2-xl font-bold mt-8 mb-4">Minhas redes sociais</h1>
            <form 
            onSubmit={handleRegister}
            className="flex flex-col max-w-xl w-full ">
                <label className="text-white font-medium mt-2 mb-2"> Link do instagram</label>
                <Input
                    type="url"
                    placeholder="Digite seu instagram...."
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                />

                <label className="text-white font-medium mt-2 mb-2"> Link do Linkedin</label>
                <Input
                    type="url"
                    placeholder="Digite seu Linkedin...."
                    value={Linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}
                />
                <button
                    type="submit"
                    className="text-white bg-blue-600 h-9 rounded-md items-center justify-center flex mb-7 font-medium"
                >
                    Salvar inks
                </button>
            </form>
        </div>
    )
}