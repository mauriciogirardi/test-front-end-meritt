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
`;

export const Grid = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 844px auto;
  padding-bottom: 2rem;
  grid-template-areas:
    'Evidence  Results'
    'NextEvidence  Results';
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
`;

export const Cards = styled.div`
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
`;

export const BoxResults = styled.aside`
  grid-area: Results;
  background-color: #fff;
  width: 270px;
  height: 580px;
  border-radius: 0.2rem;
  padding: 20px 23px;

  > div {
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
`;
