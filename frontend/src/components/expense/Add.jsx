import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    Form,
    FormGroup,
    Label
} from 'reactstrap';
import {connect} from 'react-redux';

import PageHeader from '../lib/PageHeader/PageHeader';
import Text from '../lib/Text/Text';
import FormInput from '../lib/FormInput/FormInput';
import Container from '../lib/Container/Container';
import {Actions} from '../../constants';

@connect(state => state)
export default class ExpenseAdd extends Component {
    static propTypes = {
        dispatch: PropTypes.any
    };

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getInputValue(id) {
        return document.getElementById(id).value.trim();
    }

    handleSubmit(evt) {
        evt.preventDefault();

        const payload = {
            itemName:  this.getInputValue('itemName'),
            itemPrice: this.getInputValue('itemPrice'),
            amountPurchased: this.getInputValue('amountPurchased')
        };

        this.props.dispatch({
            type: Actions.ADD_EXPENSE_REQUEST,
            payload
        });
    }

    render() {
        return (
            <div>
                <PageHeader label='Add Expense' />

                <Container maxWidth='30rem'>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for='itemName'>
                                <Text
                                    label='Item Name'
                                    fontSize='14' />
                            </Label>
                            <FormInput
                                type='text'
                                id='itemName'
                                name='itemName'
                                placeholder='Enter name here' />
                        </FormGroup>

                        <FormGroup>
                            <Label for='itemPrice'>
                                <Text
                                    label='Item Price'
                                    fontSize='14' />
                            </Label>
                            <FormInput
                                type='text'
                                id='itemPrice'
                                name='itemName'
                                placeholder='Enter price here' />
                        </FormGroup>

                        <FormGroup>
                            <Label for='amountPurchased'>
                                <Text
                                    label='Amount Purchased'
                                    fontSize='14' />
                            </Label>
                            <FormInput
                                type='text'
                                id='amountPurchased'
                                name='amountPurchased'
                                placeholder='Enter amount here' />
                        </FormGroup>

                        <Button type='submit'>
                            <Text
                                label='Submit'
                                fontSize='14' />
                        </Button>
                    </Form>
                </Container>
            </div>
        );
    }
}
