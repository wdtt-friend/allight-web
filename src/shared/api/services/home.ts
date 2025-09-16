import type { HomeItemDTO, HomeItemListDTO } from '../types/home';

export async function getHomeItemList(): Promise<HomeItemListDTO> {
    const sleep = (time: number) => new Promise<void>((resolve) => {
        const timer = setTimeout(resolve, time);
    });
  
    await sleep(300);
  
    const homeItemList: HomeItemDTO[] = [
        { id: 0 },
        { id: 1 },
        { id: 2 },
    ];
  
    return {
        homeItemList: homeItemList,
    } as HomeItemListDTO;
}