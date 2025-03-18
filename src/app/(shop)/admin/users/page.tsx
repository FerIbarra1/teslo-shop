export const revalidate = 0;

import { getPaginatedUsers } from '@/actions';
import { Title } from '@/components';

import { redirect } from 'next/navigation';
import { UsersTable } from './ui/UsersTable';

export default async function AdminUsersPage() {

    const { ok, users = [] } = await getPaginatedUsers();

    if (!ok) {
        redirect('/auth/login');
    }

    return (
        <>
            <Title title="Usuarios" />

            <div className="mb-10">
                <UsersTable users={users} />
            </div>
        </>
    );
}