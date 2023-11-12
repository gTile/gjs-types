
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './coglpango-13-ambient.d.ts';
import './coglpango-13-import.d.ts';
/**
 * CoglPango-13
 */

import type PangoCairo from '@gtile/pangocairo-1.0';
import type cairo from '@gtile/cairo-1.0';
import type GObject from '@gtile/gobject-2.0';
import type GLib from '@gtile/glib-2.0';
import type Pango from '@gtile/pango-1.0';
import type HarfBuzz from '@gtile/harfbuzz-0.0';
import type freetype2 from '@gtile/freetype2-2.0';
import type Gio from '@gtile/gio-2.0';
import type Cogl from '@gtile/cogl-13';
import type Graphene from '@gtile/graphene-1.0';
import type GL from '@gtile/gl-1.0';

/**
 * This updates any internal glyph cache textures as necessary to be
 * able to render the given `layout`.
 * 
 * This api should be used to avoid mid-scene modifications of
 * glyph-cache textures which can lead to undefined rendering results.
 * @param layout A #PangoLayout
 */
export function ensure_glyph_cache_for_layout(layout: Pango.Layout): void
/**
 * Clears the glyph cache for `font_map`.
 * @param font_map a #CoglPangoFontMap
 */
export function font_map_clear_glyph_cache(font_map: FontMap): void
/**
 * Create a [class`Pango`.Context] for the given `font_map`.
 * @param font_map a #CoglPangoFontMap
 * @returns the newly created context: free with [method@GObject.Object.unref].
 */
export function font_map_create_context(font_map: FontMap): Pango.Context
/**
 * Retrieves the [class`CoglPango`.Renderer] for the passed `font_map`.
 * @param font_map a #CoglPangoFontMap
 * @returns a #PangoRenderer
 */
export function font_map_get_renderer(font_map: FontMap): Pango.Renderer
/**
 * Retrieves whether the [class`CoglPango`.Renderer] used by `font_map` will use
 * mipmapping when rendering the glyphs.
 * @param font_map a #CoglPangoFontMap
 * @returns %TRUE if mipmapping is used, %FALSE otherwise.
 */
export function font_map_get_use_mipmapping(font_map: FontMap): boolean
/**
 * Creates a new font map.
 * @returns the newly created #PangoFontMap
 */
export function font_map_new(): Pango.FontMap
/**
 * Sets the resolution for the `font_map`.
 * 
 * This is a scale factor between points specified in a
 * [struct`Pango`.FontDescription] and Cogl units.
 * The default value is %96, meaning that a 10 point font will be 13
 * units high. (10 * 96. / 72. = 13.3).
 * @param font_map a #CoglPangoFontMap
 * @param dpi The resolution in "dots per inch". (Physical inches aren't       actually involved; the terminology is conventional.)
 */
export function font_map_set_resolution(font_map: FontMap, dpi: number): void
/**
 * Sets whether the renderer for the passed font map should use
 * mipmapping when rendering a [class`Pango`.Layout].
 * @param font_map a #CoglPangoFontMap
 * @param value %TRUE to enable the use of mipmapping
 */
export function font_map_set_use_mipmapping(font_map: FontMap, value: boolean): void
export module Renderer {

    // Constructor properties interface

    export interface ConstructorProperties extends Pango.Renderer.ConstructorProperties {

        // Own constructor properties of CoglPango-13.CoglPango.Renderer

        context?: any | null
    }

}

export interface Renderer {

    // Own properties of CoglPango-13.CoglPango.Renderer

    readonly context: any

    // Class property signals of CoglPango-13.CoglPango.Renderer

    connect(sigName: "notify::context", callback: (($obj: Renderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::context", callback: (($obj: Renderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::context", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Renderer extends Pango.Renderer {

    // Own properties of CoglPango-13.CoglPango.Renderer

    static name: string
    static $gtype: GObject.GType<Renderer>

    // Constructors of CoglPango-13.CoglPango.Renderer

    constructor(config?: Renderer.ConstructorProperties) 
    _init(config?: Renderer.ConstructorProperties): void
}

export interface RendererClass {
}

export abstract class RendererClass {

    // Own properties of CoglPango-13.CoglPango.RendererClass

    static name: string
}

    export type FontMap = PangoCairo.FontMap
/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
export const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
export const __version__: string
// END