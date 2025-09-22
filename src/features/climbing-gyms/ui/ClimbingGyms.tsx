import type { ClimbingGymDTO } from '@/entities/climbing-gyms/model/climbing-gyms-types';
import { EmptyState } from '@/shared/ui/empty/EmptyState';
import { useClimbingGyms } from '../model/climbing-gyms-hooks';
import { EMPTY_MESSAGES } from '@/shared/constants/message';
import { ClimbingGym } from './ClimbingGym';

export function ClimbingGyms() {
   const { data } = useClimbingGyms();

    const gyms = data.content;

    if (!gyms || !gyms.length) return <EmptyState message={EMPTY_MESSAGES.climbingGyms} />;

    return (
        <div>
            {gyms.map((climbingGym: ClimbingGymDTO) => (
                <ClimbingGym key={climbingGym.id} climbingGym={climbingGym} />
            ))}
        </div>
    );
}
