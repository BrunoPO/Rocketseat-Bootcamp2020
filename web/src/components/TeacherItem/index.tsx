import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'
import api from '../../services/api'

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: string;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemsProps<> {
  teacher: Teacher;
}

const TeacherList: React.FC<TeacherItemsProps>= ({ teacher }) => {
  function createNewConnection() {
    api.post('connections', {
      user_id: teacher.id,
    })
  }

  return (
    <article className="teacher-item">
      <header>

        <img 
          src={teacher.avatar}
          alt="Avatar"
        />

        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>

      </header>
      
      <p>
        {teacher.bio}
      </p>

      <footer>

        <p>
          Preço/hora
          <strong>R$ {teacher.cost}</strong>
        </p>

        <a
          onClick={createNewConnection}
          target="_black"
          href={`https://wa.me/${teacher.whatsapp}`}>
            <img src={whatsappIcon} alt="whatsapp"/>
            Entrar em contado
        </a>

      </footer>
    </article>
  );
}

export default TeacherList;
