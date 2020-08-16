import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa';
import { Container } from '../../styles/GlobalStyles';
import { PupilContainer, ProfilePicture } from './styled';
import api from '../../services/axios';
import Loading from '../../components/Loading';

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
      <Loading isLoading />
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
            <Link to={`/pupil/${pupil.id}`}>
              <FaEdit size={16} />
            </Link>
            <Link>
              <FaWindowClose size={16} />
            </Link>
          </div>
        ))}
      </PupilContainer>
    </Container>
  );
}
