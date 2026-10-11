import { useRecoilCallback } from 'recoil';

import { ruleIds, ruleState } from '../state/rules';
import { semanticTokenIds, semanticTokenState } from '../state/semanticTokens';

import { confirm } from '../services/dialog';

import { EntityType } from '../constants';

import createRule from '../model/rule';
import createSemanticToken from '../model/semanticToken';

import type { Rule, SemanticToken } from '../types';

type AsyncRecoilCallback<T> = (
    { set, snapshot }
) => (args: {
    input: Partial<T>;
    filterScope?: boolean;
    type: EntityType;
}) => Promise<T | undefined>;

// type RecoilCallback<T> =

function useAddEntity<T>() {
    const addEntityCallback: AsyncRecoilCallback<T> =
        ({ set, snapshot }) => async ({
            input,
            filterScope, // = false,
            type,
        }) => {
            filterScope = filterScope ?? false;

            let entity;
            if (type === EntityType.Rule) {
                const existingIds = await snapshot.getPromise(ruleIds);
                entity = createRule(input, {
                    existingIds,
                    filterScope: filterScope,
                });

                set(ruleState(entity.id), entity);
            }

            if (type === EntityType.SemanticToken) {
                const existingIds = await snapshot.getPromise(semanticTokenIds);
                let entity;
                try {
                    entity = createSemanticToken(input, {
                        existingIds,
                    });
                } catch (_e) {
                    confirm((_e as Error).message);
                    return;
                }

                set(semanticTokenState(entity.id), entity);
            }

            return entity;
        };

    const addEntity = useRecoilCallback(addEntityCallback, []);

    return addEntity;
};

export default useAddEntity;
