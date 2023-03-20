import React from 'react';

import accessIcon from '../../assets/icons/access.svg';
import buildIcon from '../../assets/icons/build.svg';
import githubIcon from '../../assets/icons/github.svg';
import usersIcon from '../../assets/icons/users.svg';

import * as S from './styles';

type ProfileProps = {
    avatar: string;
    name: string;
    deescription: string;
    username: string;
    followers: number;
    company: string;
    linkProfile: string;
}

const Profile: React.FC<ProfileProps> = ({ avatar, name, deescription, username, followers, company, linkProfile }) => {
  return (
    <S.ProfileContainer> 
        <S.ProfileImageContainer>
            <img src={avatar} alt="" />
        </S.ProfileImageContainer>

        <S.ProfileMainContainer>
            <S.ProfileDescriptionsContainer>
                <h2>{name}</h2>
                <span>{deescription}</span>
            </S.ProfileDescriptionsContainer>

            <S.ProfileInfoContainer>
                <div>
                    <img src={githubIcon} alt="" />
                    <span>
                        {username}
                    </span>
                </div>
                <div>
                    <img src={buildIcon} alt="" />
                    <span>
                        {company}
                    </span>
                </div>
                <div>
                    <img src={usersIcon} alt="" />
                    <span>
                        {followers} seguidores
                    </span>
                </div>
            </S.ProfileInfoContainer>

            <S.GitHubAccessLink onClick={() => window.open(linkProfile)}>
                <span>GITHUB</span> 
                <img src={accessIcon} alt="" />
            </S.GitHubAccessLink>
        </S.ProfileMainContainer>
    </S.ProfileContainer>
  );
}

export default Profile;