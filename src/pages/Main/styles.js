import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;

  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    background: #fff;
    border: 1px solid #fff;
    font-size: 18px;
    color: #444;
    border-radius: 3px;
    transition: border-color ease 0.3s;

    &:hover {
      border-color: #52d89f;
    }
  }

  button {
    height: 55px;
    padding: 0 20px;
    margin-left: 10px;
    background: #63f5b6;
    color: #fff;
    border: 1px solid #63f5b6;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;
    transition: background ease 0.3s;
    cursor: pointer;

    &:hover {
      background: #52d89f;
      border: 1px solid #52d89f;
    }
  }
`;
