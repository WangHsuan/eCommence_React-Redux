import React from 'react';
import { selectCollections } from 'redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';
import { Route } from 'react-router-dom';
import { convertCollectionsSnapshotToMap, firestore } from 'firebase/firebase.utils';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
//redux
import { connect } from 'react-redux'
import CollectionPreview from '../../components/collection-preview/collection-preview';
import CollectionsOverview from 'components/collections-overview/collections-overview.component';
import CollectionPage from 'pages/collection/collection.component';
import CollectionsOverviewContainer from 'components/collections-overview/collections-overview.container';
import CollectionPageContainer from 'pages/collection/collection.container';

class ShopPage extends React.Component {
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;

        fetchCollectionsStartAsync();
    }

    render() {
        const { match } = this.props;
        return (
            <div className='shop-page'>
                <Route
                    exact
                    path={`${match.path}`}
                    component={CollectionsOverviewContainer}
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    component={CollectionPageContainer}
                />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);