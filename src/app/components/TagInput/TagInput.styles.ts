import styled from "styled-components";

export const Wrapper = styled.div`
  .ReactTags__selected {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }

  .ReactTags__tag {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 6px;

    background-color: #09f;
    color: #fff;
  }

  .ReactTags__remove {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 24px;
    height: 1em;

    font-size: 1em;

    background-color: transparent;
    border: 0;
    color: #fff;

    cursor: pointer;
  }

  .ReactTags__tagInput{
    flex-grow: 1;
  } 
  
  .ReactTags__tagInputField {
    width: 100%;
    padding: 4px 0;

    border: none;
    border-bottom: 1px solid #ccc;
    border-radius: 0;
    outline: none;

    font-size: 1em;
    font-family: "Lato", sans-serif;
    color: #274060;
    background-color: transparent;
  }
`;