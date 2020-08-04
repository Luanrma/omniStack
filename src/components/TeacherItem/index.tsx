import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
        <header>
            <img src="https://avatars0.githubusercontent.com/u/42654434?s=400&u=18d4c668a2e0767e1e1ea1f2aff1b88301b25362&v=4" alt="Luan Miano"></img>
            <div>
                <strong>Luan Miano</strong>
                <span>Química</span>
            </div>
        </header>
        <p>
        A nível organizacional, a mobilidade dos capitais internacionais facilita a criação das novas proposições.
        <br/><br/>
        Do mesmo modo, a necessidade de renovação processual aponta para a melhoria das formas de ação.
        </p>

        <footer>
            <p>
                Preço/hora
                <strong>R$ 5,00</strong>
            </p>
                
            <button type="button">
                <img src={whatsappIcon} alt="Whatsapp" />
                Entrar em contato
            </button>
            
        </footer>
        </article>
    );
}

export default TeacherItem;