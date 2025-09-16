import type { HomeItemDTO, HomeItemListDTO } from '../types/home';

export async function getHomeItemList(opts?: {
    signal?: AbortSignal;
}): Promise<HomeItemListDTO> {
    const sleep = (ms: number, signal?: AbortSignal) =>
        new Promise<void>((resolve, reject) => {
            if (signal?.aborted) {
                return reject(new DOMException('Aborted', 'AbortError'));
            }

            const timer = setTimeout(resolve, ms);

            signal?.addEventListener(
                'abort',
                () => {
                    clearTimeout(timer);
                    reject(new DOMException('Aborted', 'AbortError'));
                },
                { once: true }
            );
        });

    await sleep(300, opts?.signal);

    const homeItemList: HomeItemDTO[] = [{ id: 0 }, { id: 1 }, { id: 2 }];

    return { homeItemList };
}
