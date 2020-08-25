import React from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import { addItemToCart } from '../../graphql/cart.utils';
import CheckoutItem from './checkout-item.component';


const ADD_ITEM_TO_CART = gql`
    mutation AddItemToCart($item: Item!) {
        addItemToCart(item: $item) @client
    }
`;

const CheckoutItemContainer = () => (
    <Mutation mutation={ADD_ITEM_TO_CART}>
    {
        addItemToCart => <CheckoutItem addItemToCart={addItemToCart} />
    }
    </Mutation>
);

export default CheckoutItemContainer;