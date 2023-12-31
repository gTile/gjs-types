
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './shew-0-ambient.d.ts';
import './shew-0-import.d.ts';
/**
 * Shew-0
 */

import type Gtk from '@gtile/gtk-4.0';
import type Gsk from '@gtile/gsk-4.0';
import type Graphene from '@gtile/graphene-1.0';
import type GObject from '@gtile/gobject-2.0';
import type GLib from '@gtile/glib-2.0';
import type Gdk from '@gtile/gdk-4.0';
import type cairo from '@gtile/cairo-1.0';
import type PangoCairo from '@gtile/pangocairo-1.0';
import type Pango from '@gtile/pango-1.0';
import type HarfBuzz from '@gtile/harfbuzz-0.0';
import type freetype2 from '@gtile/freetype2-2.0';
import type Gio from '@gtile/gio-2.0';
import type GdkPixbuf from '@gtile/gdkpixbuf-2.0';
import type GModule from '@gtile/gmodule-2.0';

export module ExternalWindow {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Shew-0.Shew.ExternalWindow

        display?: Gdk.Display | null
    }

}

export interface ExternalWindow {

    // Own properties of Shew-0.Shew.ExternalWindow

    readonly display: Gdk.Display

    // Own fields of Shew-0.Shew.ExternalWindow

    parent_instance: GObject.Object

    // Owm methods of Shew-0.Shew.ExternalWindow

    get_display(): Gdk.Display
    set_parent_of(child_surface: Gdk.Surface): void

    // Own virtual methods of Shew-0.Shew.ExternalWindow

    vfunc_set_parent_of(child_surface: Gdk.Surface): void

    // Class property signals of Shew-0.Shew.ExternalWindow

    connect(sigName: "notify::display", callback: (($obj: ExternalWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: ExternalWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExternalWindow extends GObject.Object {

    // Own properties of Shew-0.Shew.ExternalWindow

    static name: string
    static $gtype: GObject.GType<ExternalWindow>

    // Constructors of Shew-0.Shew.ExternalWindow

    constructor(config?: ExternalWindow.ConstructorProperties) 
    static new_from_handle(handle_str: string | null): ExternalWindow
    _init(config?: ExternalWindow.ConstructorProperties): void
}

export module WindowExporter {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Shew-0.Shew.WindowExporter

        window?: Gtk.Window | null
    }

}

export interface WindowExporter {

    // Own properties of Shew-0.Shew.WindowExporter

    readonly window: Gtk.Window

    // Owm methods of Shew-0.Shew.WindowExporter

    export(callback: Gio.AsyncReadyCallback<this> | null): void
    export_finish(result: Gio.AsyncResult): string | null
    unexport(handle: string | null): void

    // Class property signals of Shew-0.Shew.WindowExporter

    connect(sigName: "notify::window", callback: (($obj: WindowExporter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: WindowExporter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class WindowExporter extends GObject.Object {

    // Own properties of Shew-0.Shew.WindowExporter

    static name: string
    static $gtype: GObject.GType<WindowExporter>

    // Constructors of Shew-0.Shew.WindowExporter

    constructor(config?: WindowExporter.ConstructorProperties) 
    constructor(window: Gtk.Window) 
    static new(window: Gtk.Window): WindowExporter
    _init(config?: WindowExporter.ConstructorProperties): void
}

export interface ExternalWindowClass {

    // Own fields of Shew-0.Shew.ExternalWindowClass

    parent_class: GObject.ObjectClass
    set_parent_of: (external_window: ExternalWindow, child_surface: Gdk.Surface) => void
}

export abstract class ExternalWindowClass {

    // Own properties of Shew-0.Shew.ExternalWindowClass

    static name: string
}

export interface WindowExporterClass {

    // Own fields of Shew-0.Shew.WindowExporterClass

    parent_class: GObject.ObjectClass
}

export abstract class WindowExporterClass {

    // Own properties of Shew-0.Shew.WindowExporterClass

    static name: string
}

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