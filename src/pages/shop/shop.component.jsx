import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionPageContainer from '../../pages/collections/collections.container';
import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';


class ShopPage extends React.Component {
    componentDidMount() {
        const { fetchCollectionsStart } = this.props;
        fetchCollectionsStart();
    }

    render() {
        const { match } = this.props;
        return (
            <div>
                <Route exact path={`${match.path}`}
                    component={CollectionOverviewContainer} />
                <Route path={`${match.path}/:collectionId`}
                    component={CollectionPageContainer} />
            </div>
        )
    }

};

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);