import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import { Link } from 'react-router-dom';
import {
  FaUserCircle,
  FaEdit,
  FaWindowClose,
  FaExclamation,
} from 'react-icons/fa';
import { toast } from 'react-toastify';
import { Container } from '../../styles/GlobalStyles';
import { PupilContainer, ProfilePicture } from './styled';
import api from '../../services/axios';
import Loading from '../../components/Loading';

export default function Pupils() {
  const [pupils, setPupils] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const response = await api.get('pupils');
      const { data } = response;
      setPupils(data);
      setIsLoading(false);
    }
    getData();
  }, []); // Segundo parametro vazio quer dizer componentDidMount()

  const changeByExclamation = (e) => {
    const exclamation = e.currentTarget.nextSibling;
    exclamation.setAttribute('display', 'block');
    e.currentTarget.remove();
  };
  const handleDelete = async (e, id, index) => {
    e.persist();
    try {
      setIsLoading(true);
      await api.delete(`/pupils/${id}`);
      const newPupils = [...pupils];
      newPupils.splice(index, 1);
      setPupils(newPupils);

      e.target.parentElement.remove();
      setIsLoading(false);
    } catch (error) {
      const status = get(error, 'response.status', []);
      if (status === 404) {
        toast.error('Você precisa fazer login.');
      } else {
        toast.error(new Error('Ocorreu um erro ao excluir aluno'));
      }

      setIsLoading(false);
    }
  };
  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Pupils</h1>
      <PupilContainer>
        {pupils.map((pupil, index) => (
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
            <Link onClick={changeByExclamation} to="#">
              <FaWindowClose size={16} />
            </Link>
            <FaExclamation
              onClick={(e) => handleDelete(e, pupil.id, index)}
              size={16}
              display="none"
              cursor="pointer"
            />
          </div>
        ))}
      </PupilContainer>
    </Container>
  );
}
