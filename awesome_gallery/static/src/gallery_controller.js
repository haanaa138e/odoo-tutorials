import { Component } from "@odoo/owl";
import {Layout} from "@web/search/layout";
import { standardViewProps } from "@web/views/standard_view_props";

export class GalleryController extends Component {
	 static template = "awesome_gallery.GalleryController";
	 static props = {
        ...standardViewProps,
		 archInfo: Object,
    };
	 static components = { Layout };
}


