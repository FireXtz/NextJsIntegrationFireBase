import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { Inter } from '@next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <main className={styles.container}>

      <form action="">
        <input type="text" placeholder='Nome'/>
        <input type="text" placeholder='Email'/>
        <input type="text" placeholder='Telefone'/>
        <textarea placeholder='Observações'></textarea>
        <button type='submit'>Salvar</button>
      </form>

      <div>
        <input type="text" placeholder='Buscar' />
      </div>

     </main>
    </>
  )
}
