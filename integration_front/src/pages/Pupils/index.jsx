import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
// import { Link } from 'react-router-dom';
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa';
import { Container } from '../../styles/GlobalStyles';
import { PupilContainer, ProfilePicture } from './styled';
import api from '../../services/axios';

export default function Pupils() {
  const [pupils, setPupils] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await api.get('pupils');
      const { data } = response;
      setPupils(data);
    }
    getData();
  }, []); // Segundo parametro vazio quer dizer componentDidMount()
  return (
    <Container>
      <h1>Pupils</h1>
      <PupilContainer>
        {pupils.map((pupil) => (
          <div key={String(pupil.id)}>
            {get(pupil, 'Photos[0].url', false) ? (
              <ProfilePicture>
                <img
                  src={pupil.Photos[0].url}
                  alt={`Imagem do aluno ${pupil.name}`}
                />
              </ProfilePicture>
            ) : (
                <FaUserCircle size={36} />
              )}
            <span>{pupil.name}</span>
            <span>{pupil.email}</span>
            <FaEdit size={16} />
            <FaWindowClose size={16} />
          </div>
        ))}
      </PupilContainer>
    </Container>
  );
}
