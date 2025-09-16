import type { HomeItemDTO } from '../../shared/api/types/home';

export function HomeItemList({
    homeItemList,
}: {
    homeItemList: HomeItemDTO[];
}) {
    if (!homeItemList?.length) return <div>항목이 없습니다.</div>;

    return (
        <div>
            {homeItemList.map(item => (
                <HomeItem key={item.id} item={item} />
            ))}
        </div>
    );
}

function HomeItem({ item }: { item: HomeItemDTO }) {
    return <div>Home Item #{item.id}</div>;
}
