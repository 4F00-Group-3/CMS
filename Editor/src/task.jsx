import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    border: 1px solid black;
    padding: 10px;
    border-radius: 1px;
    margin-bottom: 10px;
`;

export default class Task extends React.Component{
    render(){
        return this.props.task.content;
    }
}