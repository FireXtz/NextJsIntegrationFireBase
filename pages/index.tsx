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
          <input type="text" placeholder='Nome' />
          <input type="text" placeholder='Email' />
          <input type="text" placeholder='Telefone' />
          <textarea placeholder='Observações'></textarea>
          <button type='submit'>Salvar</button>
        </form>

        <div className={styles.caixacontatos}>
          <input type="text" placeholder='Buscar' />

          <div className={styles.caixaUnico}>


            <div className={styles.boxTitulo}>
              <p className={styles.nomeTitulo}>Fulano de tal</p>
            </div>

            <div>
              <a>Editar</a>
              <a>Remover</a>
            </div>

            <div className={styles.dados}>
              <p>fulanodeTal@gmail.com</p>
              <p>0000010221</p>
              <p>Fulano de tal da rua tal</p>
            </div>

          </div>

        </div>

      </main>
    </>
  )
}
