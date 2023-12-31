import styled from 'styled-components';

export const Cards = styled.div`
  flex: 1;
  background: ${(props) => props.theme.cardBackground};
  color: ${(props) => props.theme.textDark};
  border: 1px solid ${(props) => props.theme.cardBorder};
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  flex-wrap: wrap;

  .card {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    min-width: 280px;
    width: 100%;
  }

  .projectCardTitle {
    font-size: 18px;
    margin: 0;
  }

  .cardTitle:hover {
    color: ${(props) => props.theme.accent};
    text-decoration: underline;
  }

  .btn-small {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 8px;
  }

  .btn-small-txt {
    padding-right: 5px;
  }
`;
