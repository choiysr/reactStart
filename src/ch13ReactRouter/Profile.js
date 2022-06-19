import {useParams} from "react-router-dom";

const data = {
    sora: {
        name: '최예소라',
        description: '배고파'
    },
    dooly: {
        name: '둘리',
        description: '요리보고'
    }
}

const Profile = () => {

    /*
      const params = useParams(); 는 파라미터를 객체형태로 받아온다.
     */
    const params = useParams();
    console.log(params);   // {username : 'sora'}
    const profile = data[params.username];

    return (<div>
        <h1>사용자 프로필</h1>
        {profile ? (<div>
            <h2>{profile.name}</h2>
            <p>{profile.description}</p>
        </div>) : (<p>프로필이 존재하지 않습니다.</p>)
        }
    </div>);
}

export default Profile;