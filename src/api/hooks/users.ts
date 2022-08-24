import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { query } from 'thin-backend';
import { useQuery } from 'thin-backend-react';

import { authState } from '@/recoil/auth';
import { getUserFilterState } from '@/recoil/users';

export default function useUserQuery() {
  const [getUserFilter, setUserFilter] = useRecoilState(getUserFilterState);
  const navigate = useNavigate();

  function useGetUsers() {
    return useQuery(query('platusers'));
  }

  function useGetUser() {
    return useQuery(
      query('platusers')
        .filterWhere('name', getUserFilter.name)
        .filterWhere('phoneNumber', getUserFilter.phoneNumber),
    );
  }

  function useSubmitGetUser() {
    const users = useGetUser();
    const setAuth = useSetRecoilState(authState);

    useEffect(() => {
      if (getUserFilter.name && users && !users.length) {
        toast.warn('일치하는 정보가 없습니다.');
      }
      if (users && users.length) {
        setAuth({
          id: users?.[0]?.id ?? '',
        });
        navigate('/my');
      }
    }, [users]);

    return { fetch: setUserFilter };
  }

  return { useGetUsers, useGetUser, useSubmitGetUser };
}
