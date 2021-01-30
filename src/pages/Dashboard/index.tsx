import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

import Header from 'components/Header';
import CardEvidence from 'components/CardEvidence';

import { Link } from 'react-router-dom';
import CardResults from 'components/CardResults';
import {
  Container,
  BoxEvidence,
  BoxNextEvidence,
  Cards,
  BoxResults,
  Grid,
} from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>Olá, Luiza Martins</h1>

        <Grid>
          <BoxEvidence>
            <h2>Provas em progresso (4)</h2>

            <Cards>
              <CardEvidence
                title="Linguagens e Códigos"
                subtitle="Simulado Enem 2021"
                maxQuestion={45}
                question={15}
                progressBar
                time="00:20:45"
                date="De 20/12/20 a 20/01/21"
              />
              <CardEvidence
                title="Matemática"
                subtitle="Simulado Enem 2021"
                maxQuestion={45}
                question={40}
                progressBar
                time="00:10:00"
                date="De 20/12/20 a 20/01/21"
              />
              <CardEvidence
                title="Física"
                subtitle="Avaliação trimestral 20.3"
                backgroundSubtitle="#5653FF"
                maxQuestion={10}
                progressBar
                question={8}
                time="00:20:45"
                date="De 20/12/20 a 20/01/21"
              />
              <IoIosArrowForward />
            </Cards>
          </BoxEvidence>

          <BoxNextEvidence>
            <h2>Próximas provas (2)</h2>
            <Cards>
              <CardEvidence
                title="Inglês"
                subtitle="Avaliação trimestral 20.3"
                backgroundSubtitle="#5653FF"
                maxQuestion={45}
                progressBar={false}
                time="00:20:45"
                date="De 20/12/20 a 20/01/21"
              />
              <CardEvidence
                title="Ciência da Natureza"
                subtitle="Simulado Enem 2021"
                progressBar={false}
                maxQuestion={45}
                time="00:10:00"
                date="De 20/12/20 a 20/01/21"
                isDisabled
              />
            </Cards>
          </BoxNextEvidence>

          <BoxResults>
            <div>
              <h2>Seus resultados (6)</h2>
              <Link to="/">Ver todos</Link>
            </div>

            <CardResults
              subtitle="Simulado Enem 2020"
              title="Linguagens e Códigos"
              resultInTime="Realizada em 31min"
              date="Entregue em 27/11/20"
              backgroundSubtitle="#DC5A10"
              finishedQuestions={36}
              questions={45}
            />

            <CardResults
              subtitle="Avaliação trimestral 20.3"
              title="Biologia"
              resultInTime="Realizada em 30min"
              date="Entregue em 27/11/20"
              backgroundSubtitle="#5653FF"
              finishedQuestions={3}
              questions={10}
            />

            <CardResults
              subtitle="Avaliação trimestral 20.3"
              title="Química"
              resultInTime="Realizada em 40min"
              date="Entregue em 27/11/20"
              backgroundSubtitle="#5653FF"
              finishedQuestions={5}
              questions={10}
            />

            <CardResults
              subtitle="Simulado Enem 2019"
              title="Ciências Humanas"
              resultInTime="Realizada em 40min"
              date="Entregue em 20/12/19"
              backgroundSubtitle="#7A40C5"
              finishedQuestions={31}
              questions={45}
            />
          </BoxResults>
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
