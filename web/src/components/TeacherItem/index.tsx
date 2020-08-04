import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://media-exp1.licdn.com/dms/image/C4E03AQE3CQrkZ181pA/profile-displayphoto-shrink_100_100/0?e=1602115200&v=beta&t=owdmem-NBfpZ3QWJMSO54MLH7g3BfWR8RDy1zUL5ouU" alt="Imagem de perfil"/>
                <div>
                    <strong>Bruno Pinheiro</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                Entusiasta
                <br/><br/>
                Apaixonado
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button>
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;
