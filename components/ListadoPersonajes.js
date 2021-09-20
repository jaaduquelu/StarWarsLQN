import React from 'react';
import Container from '@material-ui/core/Container';
import { useQuery, gql } from '@apollo/client';

import PersonajeItem from './PersonajeItem';


const QUERY_PERSONAJES = gql`{
    allPeople{
        people{
          id
          name
          birthYear
          gender
          homeworld{
            name
          }
          species{
            name
          }
          filmConnection{
            films{
              id
              title
              director
              planetConnection{
                planets{
                  name
                }
              }
            }
          }
        }
    }
}`;

const ListadoPersonajes = () => {

  // Obtener todos los Personajes
  const { data, loading, error } = useQuery(QUERY_PERSONAJES);
  let personajes = data?.allPeople.people;

  console.log(personajes)

  return (
    <>
      <Container >
        <h1>LISTADO DE PERSONAJES</h1>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
          {
            personajes?.map((p) => (
              <PersonajeItem
                key={p.id}
                personaje={p}
              />
            ))
          }
        </div>
      </Container>
    </>
  )

}

export default ListadoPersonajes;
