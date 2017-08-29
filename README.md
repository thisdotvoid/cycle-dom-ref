### Cycle.js DOM ref selector helper

Use `data-ref` attribute in view
```ts
function view(state$: Stream<State>): Stream<VNode> {
  return state$.map(s => s.count).map(count =>
    <div>
      <h2>My Awesome Cycle.js app</h2>
      <button type="button" data-ref="add">
        Increase
      </button>
    </div>
  );
}
```

Reference it with `ref(DOM, 'ref-name-used-in-view')` in intent
```ts
function intent(DOM: DOMSource): Stream<Reducer> {
  const init$: Stream<Reducer> = xs.of<Reducer>(() => ({ count: 0 }));

  const add$: Stream<Reducer> = ref(DOM, 'add')
    .events('click')
    .mapTo<Reducer>(state => ({ ...state, count: state.count + 1 }));
  return xs.merge(init$, add$);
}
```
#### y tho
Just to remove uncertainty, which comes with selecting elements with classnames or ids.
Technically, it's the same css selector thing, nothing magical, but I find it easier to reason about.
