import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-perview/collection-preview.component';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';

import { CollectionsOverviewContainer } from './collection-overview.styles'
const CollectionOverview = ({ collections }) => (
    <CollectionsOverviewContainer>
        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </CollectionsOverviewContainer>
);


const mapStateToprops = createStructuredSelector({
    collections: selectCollectionsForPreview
})


export default connect(mapStateToprops)(CollectionOverview);