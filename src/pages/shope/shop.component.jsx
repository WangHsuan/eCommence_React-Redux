import React from 'react';
import { selectCollections } from 'redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';
import { Route } from 'react-router-dom';
//redux
import { connect } from 'react-redux'
import CollectionPreview from '../../components/collection-preview/collection-preview';
import CollectionsOverview from 'components/collections-overview/collections-overview.component';
import CollectionPage from 'pages/collection/collection.component';

const ShopPage = ({ match }) => {


    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    );

}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})


export default connect(mapStateToProps)(ShopPage);