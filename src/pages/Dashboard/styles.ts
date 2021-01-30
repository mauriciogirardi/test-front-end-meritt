import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;

  h1 {
    color: #595959;
    font-weight: 400;
    font-size: 1.5rem;
    margin-top: 2.4rem;
    margin-bottom: 1.2rem;
  }

  @media screen and (max-width: 500px) {
    padding: 0;

    h1 {
      font-size: 1.2rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
      padding-left: 1.2rem;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 844px auto;
  padding-bottom: 2rem;
  grid-template-areas:
    'Evidence  Results'
    'NextEvidence  Results';

  @media screen and (max-width: 1176px) {
    grid-template-columns: auto;
    grid-template-areas:
      'Evidence'
      'NextEvidence'
      'Results';
  }

  @media screen and (max-width: 500px) {
    grid-gap: 0px;
    padding-bottom: 0;
  }
`;

export const BoxEvidence = styled.div`
  grid-area: Evidence;
  background-color: #fff;
  border-radius: 0.2rem;
  max-width: 844px;
  width: 100%;
  height: 279px;
  padding: 1.3rem 1.4rem;
  overflow: hidden;

  h2 {
    font-weight: 700;
    font-size: 14px;
    color: #595959;
    margin-bottom: 1.6rem;
  }

  @media screen and (max-width: 1176px) {
    max-width: 100%;
  }

  @media screen and (max-width: 500px) {
    height: 205px;
    background-color: transparent;
    padding: 0 0 0 1.2rem;

    h2 {
      margin-bottom: 0.8rem;
    }
  }
`;

export const BoxNextEvidence = styled.div`
  grid-area: NextEvidence;
  background-color: #fff;
  border-radius: 0.2rem;
  max-width: 844px;
  width: 100%;
  height: 279px;
  padding: 1.3rem 1.4rem;
  overflow: hidden;

  h2 {
    font-weight: 700;
    font-size: 14px;
    color: #595959;
    margin-bottom: 1.6rem;
  }

  @media screen and (max-width: 500px) {
    max-width: 100%;
    height: 205px;
    background-color: transparent;
    padding: 0 0 0 1.2rem;

    h2 {
      margin-bottom: 0.8rem;
    }
  }
`;

export const Cards = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  > svg {
    color: #e8e8e8;
    font-size: 40px;
    margin-left: 42px;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: #bcbcbc;
    }
  }

  @media screen and (max-width: 1176px) {
    white-space: nowrap;
    overflow-x: auto;
    padding: 0.1rem;

    ::-webkit-scrollbar {
      height: 0.4rem;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #999591;
    }

    ::-webkit-scrollbar-track {
      background-color: #ccc;
    }

    svg {
      display: none;
    }
  }

  @media screen and (max-width: 500px) {
    ::-webkit-scrollbar {
      height: 0rem;
    }
  }
`;

export const FlexResults = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  @media screen and (max-width: 1176px) {
    margin-top: 1.5rem;
    padding: 0.3rem;
    flex-direction: row;
    white-space: nowrap;
    overflow-x: auto;
    ::-webkit-scrollbar {
      height: 0.4rem;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #999591;
    }

    ::-webkit-scrollbar-track {
      background-color: #ccc;
    }
  }

  @media screen and (max-width: 500px) {
    margin-top: 1rem;
    padding: 0.1rem;

    ::-webkit-scrollbar {
      height: 0rem;
    }
  }
`;

export const BoxResults = styled.aside`
  grid-area: Results;
  background-color: #fff;
  width: 270px;
  height: 580px;
  border-radius: 0.2rem;
  padding: 20px 23px;
  overflow: hidden;

  div.result {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;

    h2 {
      font-weight: 700;
      font-size: 14px;
      color: #595959;
    }

    a {
      color: #fa558f;
      font-size: 0.8rem;
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 1176px) {
    width: 100%;
    height: 230px;
  }

  @media screen and (max-width: 500px) {
    height: 170px;
    background-color: transparent;
    padding: 0 0 0 1.2rem;

    div.result {
      margin-bottom: 0;
      width: 17rem;
    }
  }
`;
