import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../../components/collection-perview/collection-preview.component';
import { selectCollections } from '../../redux/shop/shop.selector';

import './collection-overview.styles.scss';

const CollectionOverview = ({ collections }) => (
    <div className='collection-overview'>
        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </div>
);


const mapStateToprops = createStructuredSelector({
    collections: selectCollections
})


export default connect(mapStateToprops)(CollectionOverview);