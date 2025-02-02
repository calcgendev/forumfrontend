import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchForums} from '../../store/actions';
import ForumList from '../../components/forumlist/forumlist';

class HomeContainer extends Component {
  componentDidMount() {
    this.props.fetchForums();
  }

  render() {
    return <ForumList {...this.props} />;
  }
}

const mapStateToProps = state => ({
  isLoading: state.home.isLoading,
  forums: state.home.forums,
  error: state.home.error,
});

const mapDispatchToProps = dispatch => ({

  fetchForums: () => {
    dispatch(fetchForums());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeContainer);
