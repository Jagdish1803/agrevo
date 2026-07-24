/**
 * Shared motion constants.
 *
 * Keeping the easing curves here means every entrance, hover and layout
 * transition on the site shares the same feel — and the cubic-bezier tuples
 * are typed so Motion accepts them without casts.
 */

type Bezier = [number, number, number, number];

/** Primary curve: fast out, long settle. Used for nearly every transition. */
export const EASE_OUT_EXPO: Bezier = [0.16, 1, 0.3, 1];

/** Gentler curve for scroll-linked and looping motion. */
export const EASE_SMOOTH: Bezier = [0.25, 0.46, 0.45, 0.94];
