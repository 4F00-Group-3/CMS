import React from 'react';
import styled from 'styled-components';
import Task from './task';

const Container = styled.div`
    margin: 5px;
    border: 1px solid black;
    border-radius: 1px;
`;

const Title = styled.h3`
    padding: 10px;
`;

const TaskList = styled.div`
    padding: 10px;
`;

export default class Column extends React.Component {
    render() {
        return (
            <Container>
                <Title>{this.props.column.title}</Title>
                <TaskList>
                    Text
                </TaskList>
            </Container>
        );
    }
}