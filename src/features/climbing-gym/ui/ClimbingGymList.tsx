import type { ClimbingGymDTO } from '@/entities/climbing-gym/model/types';
import { EmptyState } from '@/shared/ui/empty/EmptyState';
import { useClimbingGymList } from '../model/useClimbingGymList';
import { EMPTY_MESSAGES } from '@/shared/constants/message';
import { ClimbingGym } from './ClimbingGymItem';

export function ClimbingGyms() {
   const { data } = useClimbingGymList();

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
