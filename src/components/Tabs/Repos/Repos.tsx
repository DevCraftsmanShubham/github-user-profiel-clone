import { FC, useEffect } from 'react';
import axios from 'axios';
import RepoItem from './RepoItem';
import { connect } from 'react-redux';
import { ReposProps } from '../../../models/RepoModel';
import { storeRepoData } from '../../../redux/actions';

const Repos: FC<ReposProps> = ({ repos, storeRepoData }) => {
  console.log(repos.data);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          'https://api.github.com/users/shalabhsingh/repos'
        );
        console.log(response.data);
        //@ts-ignore
        storeRepoData(response.data);
      } catch (error) {}
    })();
  }, []);

  return (
    <div style={{ paddingTop: 50, height: '100%' }}>
      {repos?.data?.map((repo: any) => {
        const { id, name, updated_at, language } = repo;
        return <RepoItem key={id} {...repo} />;
      })}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    repos: state.repos,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    storeRepoData: (payload: any) => dispatch(storeRepoData(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Repos);
